/**
 * Educational Theory Library (ETL.json) - JavaScript Usage Examples
 * 
 * This file demonstrates how to use the ETL.json database
 * in JavaScript/Node.js applications.
 */

const fs = require('fs');

class ETLAnalyzer {
    constructor(etlFilePath) {
        this.theories = this.loadTheories(etlFilePath);
    }

    /**
     * Load theories from JSON file
     */
    loadTheories(filePath) {
        try {
            const data = fs.readFileSync(filePath, 'utf8');
            const parsed = JSON.parse(data);
            return parsed.educational_theories;
        } catch (error) {
            console.error('Error loading theories:', error);
            return [];
        }
    }

    /**
     * Find a theory by its ID
     */
    findTheoryById(theoryId) {
        return this.theories.find(theory => theory.id === theoryId);
    }

    /**
     * Search theories by keyword
     */
    searchTheoriesByKeyword(keyword) {
        const keywordLower = keyword.toLowerCase();
        return this.theories.filter(theory => {
            // Search in theory name
            if (theory.theory_name && theory.theory_name.toLowerCase().includes(keywordLower)) {
                return true;
            }
            
            // Search in key concepts
            if (theory.key_concepts && 
                theory.key_concepts.some(concept => concept.toLowerCase().includes(keywordLower))) {
                return true;
            }
            
            // Search in educational applications
            if (theory.educational_applications && 
                theory.educational_applications.some(app => app.toLowerCase().includes(keywordLower))) {
                return true;
            }
            
            return false;
        });
    }

    /**
     * Get theories by category
     */
    getTheoriesByCategory(category) {
        return this.theories.filter(theory => theory.category === category);
    }

    /**
     * Get category statistics
     */
    getCategoryStatistics() {
        const categories = this.theories.map(theory => theory.category || 'unknown');
        const categoryCount = {};
        
        categories.forEach(category => {
            categoryCount[category] = (categoryCount[category] || 0) + 1;
        });
        
        return categoryCount;
    }

    /**
     * Get related theories for a specific theory
     */
    getRelatedTheories(theoryId) {
        const theory = this.findTheoryById(theoryId);
        if (!theory || !theory.related_theories) {
            return [];
        }
        
        return theory.related_theories
            .map(id => this.findTheoryById(id))
            .filter(Boolean);
    }

    /**
     * Generate theory recommendation based on criteria
     */
    recommendTheories(criteria) {
        const {
            gradeLevel,
            subject,
            learningObjective,
            maxResults = 5
        } = criteria;

        let filteredTheories = this.theories;

        // Filter by grade level
        if (gradeLevel) {
            filteredTheories = filteredTheories.filter(theory => 
                theory.grade_levels && theory.grade_levels.includes(gradeLevel)
            );
        }

        // Filter by subject
        if (subject) {
            filteredTheories = filteredTheories.filter(theory => 
                theory.subjects && 
                (theory.subjects.includes(subject) || theory.subjects.includes('all_subjects'))
            );
        }

        // Filter by learning objective
        if (learningObjective) {
            filteredTheories = filteredTheories.filter(theory => 
                theory.learning_objectives && 
                theory.learning_objectives.some(obj => 
                    obj.toLowerCase().includes(learningObjective.toLowerCase())
                )
            );
        }

        return filteredTheories.slice(0, maxResults);
    }

    /**
     * Generate AI prompt for a specific theory and context
     */
    generateAIPrompt(theoryId, context) {
        const theory = this.findTheoryById(theoryId);
        if (!theory) {
            return null;
        }

        let prompt = theory.ai_prompt_template || 
            `Design a learning activity based on ${theory.theory_name}`;

        // Replace placeholders with context values
        Object.keys(context).forEach(key => {
            const placeholder = `[${key}]`;
            if (prompt.includes(placeholder)) {
                prompt = prompt.replace(new RegExp(`\\[${key}\\]`, 'g'), context[key]);
            }
        });

        return {
            theory: theory.theory_name,
            prompt: prompt,
            keyPrinciples: theory.key_principles || [],
            practicalTips: theory.veteran_teacher_insights?.practical_tips || []
        };
    }

    /**
     * Create a learning pathway based on multiple theories
     */
    createLearningPathway(theoryIds) {
        const pathway = theoryIds
            .map(id => this.findTheoryById(id))
            .filter(Boolean)
            .map((theory, index) => ({
                step: index + 1,
                theory: theory.theory_name,
                focus: theory.key_principles?.[0] || 'Core learning principle',
                applications: theory.educational_applications || [],
                tips: theory.veteran_teacher_insights?.practical_tips?.[0] || 'No specific tip available'
            }));

        return pathway;
    }

    /**
     * Export theories to JSON with specific fields
     */
    exportTheories(fields, outputFile) {
        const exportData = this.theories.map(theory => {
            const exported = {};
            fields.forEach(field => {
                if (theory[field] !== undefined) {
                    exported[field] = theory[field];
                }
            });
            return exported;
        });

        fs.writeFileSync(outputFile, JSON.stringify(exportData, null, 2), 'utf8');
        console.log(`Exported ${exportData.length} theories to ${outputFile}`);
    }
}

// Example usage functions

function basicUsageExample() {
    console.log('=== Basic Usage Example ===\n');
    
    const analyzer = new ETLAnalyzer('ETL_EN_Complete.json');
    
    // 1. Category statistics
    console.log('1. Category Statistics:');
    const categories = analyzer.getCategoryStatistics();
    Object.entries(categories)
        .sort(([,a], [,b]) => b - a)
        .forEach(([category, count]) => {
            console.log(`   ${category}: ${count} theories`);
        });
    console.log();

    // 2. Search for specific theories
    console.log('2. Theories containing "learning":');
    const learningTheories = analyzer.searchTheoriesByKeyword('learning');
    learningTheories.slice(0, 3).forEach(theory => {
        console.log(`   - ${theory.theory_name} (ID: ${theory.id})`);
    });
    console.log();

    // 3. Theory recommendations
    console.log('3. Recommended theories for middle school mathematics:');
    const recommendations = analyzer.recommendTheories({
        gradeLevel: 'middle',
        subject: 'mathematics',
        maxResults: 3
    });
    recommendations.forEach(theory => {
        console.log(`   - ${theory.theory_name} (ID: ${theory.id})`);
    });
    console.log();
}

function aiIntegrationExample() {
    console.log('=== AI Integration Example ===\n');
    
    const analyzer = new ETLAnalyzer('ETL_EN_Complete.json');
    
    // Generate AI prompt for constructivism theory
    const prompt = analyzer.generateAIPrompt(1, {
        subject: 'Science',
        grade_level: 'High School',
        topic: 'Ecosystem Dynamics'
    });
    
    if (prompt) {
        console.log(`Theory: ${prompt.theory}`);
        console.log(`\nGenerated Prompt:\n${prompt.prompt}`);
        console.log(`\nKey Principles:`);
        prompt.keyPrinciples.forEach(principle => {
            console.log(`   - ${principle}`);
        });
        console.log(`\nPractical Tips:`);
        prompt.practicalTips.slice(0, 2).forEach(tip => {
            console.log(`   - ${tip}`);
        });
    }
    console.log();
}

function learningPathwayExample() {
    console.log('=== Learning Pathway Example ===\n');
    
    const analyzer = new ETLAnalyzer('ETL_EN_Complete.json');
    
    // Create a pathway for project-based learning
    const pathway = analyzer.createLearningPathway([1, 37, 67]); // Example theory IDs
    
    console.log('Project-Based Learning Pathway:');
    pathway.forEach(step => {
        console.log(`\nStep ${step.step}: ${step.theory}`);
        console.log(`   Focus: ${step.focus}`);
        console.log(`   Applications: ${step.applications.slice(0, 2).join(', ')}`);
        console.log(`   Tip: ${step.tips}`);
    });
    console.log();
}

// Web application integration example
function webAppIntegration() {
    console.log('=== Web Application Integration ===\n');
    
    // Example of how to use ETL in a web application
    const analyzer = new ETLAnalyzer('ETL_EN_Complete.json');
    
    // Simulate a teacher's query
    const teacherQuery = {
        gradeLevel: 'elementary',
        subject: 'mathematics',
        challenge: 'student engagement'
    };
    
    console.log(`Teacher Query: ${JSON.stringify(teacherQuery, null, 2)}`);
    
    // Find relevant theories
    const engagementTheories = analyzer.searchTheoriesByKeyword('engagement');
    const mathTheories = analyzer.recommendTheories({
        gradeLevel: teacherQuery.gradeLevel,
        subject: teacherQuery.subject,
        maxResults: 3
    });
    
    console.log('\nRelevant Theories for Student Engagement:');
    engagementTheories.slice(0, 2).forEach(theory => {
        console.log(`   - ${theory.theory_name}`);
        console.log(`     Tip: ${theory.veteran_teacher_insights?.practical_tips?.[0] || 'No specific tip'}`);
    });
    
    console.log('\nRecommended Math Theories:');
    mathTheories.forEach(theory => {
        console.log(`   - ${theory.theory_name}`);
    });
}

// Run examples
if (require.main === module) {
    try {
        basicUsageExample();
        console.log('\n' + '='.repeat(50) + '\n');
        aiIntegrationExample();
        console.log('\n' + '='.repeat(50) + '\n');
        learningPathwayExample();
        console.log('\n' + '='.repeat(50) + '\n');
        webAppIntegration();
    } catch (error) {
        console.error('Error running examples:', error.message);
        console.log('Please ensure ETL_EN_Complete.json is in the current directory.');
    }
}

module.exports = ETLAnalyzer;
