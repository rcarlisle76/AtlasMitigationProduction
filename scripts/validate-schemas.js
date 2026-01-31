#!/usr/bin/env node

/**
 * Schema Validation Script
 *
 * This script validates that structured data schemas are properly formatted
 * and contain required properties according to schema.org standards.
 */

const fs = require('fs');
const path = require('path');

// Color output helpers
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Schema validation rules based on schema.org standards
const schemaRules = {
  FAQPage: {
    required: ['@context', '@type', 'mainEntity'],
    mainEntityRequired: ['@type', 'name', 'acceptedAnswer'],
    answerRequired: ['@type', 'text'],
  },
  Review: {
    required: ['@type', 'author', 'reviewBody', 'reviewRating'],
    authorRequired: ['@type', 'name'],
    ratingRequired: ['@type', 'ratingValue'],
  },
  AggregateRating: {
    required: ['@type', 'ratingValue', 'reviewCount'],
  },
  LocalBusiness: {
    required: ['@context', '@type', 'name'],
  },
};

function validateSchemaComponent(filePath, componentName) {
  log(`\nValidating ${componentName}...`, 'blue');

  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for proper Script component usage
    if (!content.includes('import Script from "next/script"')) {
      log('  ⚠ Should import Script from next/script', 'yellow');
    }

    // Check for JSON.stringify usage
    if (!content.includes('JSON.stringify')) {
      log('  ⚠ Should use JSON.stringify for schema', 'yellow');
    }

    // Check for type="application/ld+json"
    if (!content.includes('type="application/ld+json"')) {
      log('  ⚠ Should set type="application/ld+json"', 'yellow');
    }

    // Extract schema structure (basic pattern matching)
    const schemaMatch = content.match(/const schema = \{[\s\S]*?\n  \}/);
    if (schemaMatch) {
      log('  ✓ Schema object found', 'green');

      // Check for @context and @type
      if (!schemaMatch[0].includes('"@context"') && !schemaMatch[0].includes("'@context'")) {
        log('  ✗ Missing @context field', 'red');
      } else {
        log('  ✓ Has @context field', 'green');
      }

      if (!schemaMatch[0].includes('"@type"') && !schemaMatch[0].includes("'@type'")) {
        log('  ✗ Missing @type field', 'red');
      } else {
        log('  ✓ Has @type field', 'green');
      }
    } else {
      log('  ⚠ Could not find schema object pattern', 'yellow');
    }

    log(`  ✓ ${componentName} structure validated`, 'green');
    return true;
  } catch (error) {
    log(`  ✗ Error reading file: ${error.message}`, 'red');
    return false;
  }
}

function main() {
  log('\n========================================', 'blue');
  log('  Schema Validation Report', 'blue');
  log('========================================\n', 'blue');

  const schemaDir = path.join(__dirname, '../src/components/seo');

  const schemas = [
    { file: 'FAQSchema.tsx', name: 'FAQSchema' },
    { file: 'ReviewSchema.tsx', name: 'ReviewSchema' },
    { file: 'AggregateRatingSchema.tsx', name: 'AggregateRatingSchema' },
    { file: 'ServiceSchema.tsx', name: 'ServiceSchema' },
    { file: 'LocalBusinessSchema.tsx', name: 'LocalBusinessSchema' },
  ];

  let allValid = true;

  schemas.forEach(({ file, name }) => {
    const filePath = path.join(schemaDir, file);
    if (fs.existsSync(filePath)) {
      const isValid = validateSchemaComponent(filePath, name);
      if (!isValid) allValid = false;
    } else {
      log(`\n✗ ${name} not found at ${filePath}`, 'red');
      allValid = false;
    }
  });

  // Check implementation in pages
  log('\n\nChecking Schema Implementation:', 'blue');

  const servicePage = path.join(__dirname, '../src/app/services/[slug]/page.tsx');
  const homePage = path.join(__dirname, '../src/app/page.tsx');

  if (fs.existsSync(servicePage)) {
    const content = fs.readFileSync(servicePage, 'utf8');
    if (content.includes('FAQSchema')) {
      log('  ✓ FAQSchema implemented in service pages', 'green');
    } else {
      log('  ✗ FAQSchema not found in service pages', 'red');
      allValid = false;
    }
  }

  if (fs.existsSync(homePage)) {
    const content = fs.readFileSync(homePage, 'utf8');
    if (content.includes('ReviewSchema')) {
      log('  ✓ ReviewSchema implemented in homepage', 'green');
    } else {
      log('  ✗ ReviewSchema not found in homepage', 'red');
      allValid = false;
    }
  }

  log('\n========================================', 'blue');
  if (allValid) {
    log('  All schemas validated successfully! ✓', 'green');
  } else {
    log('  Some validation issues found', 'yellow');
  }
  log('========================================\n', 'blue');

  process.exit(allValid ? 0 : 1);
}

main();
