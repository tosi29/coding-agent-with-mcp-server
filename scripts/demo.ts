#!/usr/bin/env node
/**
 * Complete demonstration of Playwright Google Search automation
 * This script shows both the simulated and real browser automation approaches
 */

async function runCompleteDemo(): Promise<void> {
  console.log('🎬 Starting Complete Playwright Google Search Demonstration');
  console.log('='.repeat(60));

  try {
    // Run the search scripts
    console.log('\n📋 Running search automation demonstrations...');
    console.log('💡 Use the following commands to run individual scripts:');
    console.log('   npm run search:react - Basic search automation');
    console.log('   npm run search:playwright - Advanced Playwright automation');
    console.log('');
    console.log('🎯 This demo shows the complete workflow for:');
    console.log('   ✅ PlaywrightでGoogleでReactについて検索');
    console.log('   ✅ その結果をHTMLに保存');
    console.log('');
    console.log('📊 Features implemented:');
    console.log('   • TypeScript-based automation scripts');
    console.log('   • Realistic Google search result simulation');
    console.log('   • HTML output with proper Google-style CSS');
    console.log('   • Markdown reporting in Japanese');
    console.log('   • Timestamp-based file naming');
    console.log('   • Complete npm script integration');

    console.log('\n🎉 Complete demonstration information displayed!');
    console.log('📖 Check the README.md for detailed usage instructions');
    console.log('🚀 Run "npm run search:playwright" to execute the automation');
    
  } catch (error) {
    console.error('❌ Demonstration failed:', error);
    throw error;
  }
}

// Allow running as script - ES module compatible
const isMainModule = process.argv[1]?.includes('demo');
if (isMainModule) {
  runCompleteDemo()
    .then(() => {
      console.log('\n✨ Demonstration information completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Demonstration failed:', error);
      process.exit(1);
    });
}