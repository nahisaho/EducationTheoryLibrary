#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Educational Theory Library (ETL.json) - Python Usage Examples

This file demonstrates various ways to use the ETL.json database
for educational research, analysis, and application development.
"""

import json
import pandas as pd
from collections import Counter, defaultdict
from typing import List, Dict, Any, Optional


class ETLAnalyzer:
    """A class for analyzing Educational Theory Library data."""
    
    def __init__(self, etl_file_path: str):
        """Initialize with ETL.json file path."""
        self.theories = self.load_theories(etl_file_path)
    
    def load_theories(self, file_path: str) -> List[Dict[str, Any]]:
        """Load theories from JSON file."""
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        return data['educational_theories']
    
    def find_theory_by_id(self, theory_id: int) -> Optional[Dict[str, Any]]:
        """Find a theory by its ID."""
        for theory in self.theories:
            if theory['id'] == theory_id:
                return theory
        return None
    
    def search_theories_by_keyword(self, keyword: str) -> List[Dict[str, Any]]:
        """Search theories by keyword in name, concepts, or applications."""
        results = []
        keyword_lower = keyword.lower()
        
        for theory in self.theories:
            # Search in theory name
            if keyword_lower in theory.get('theory_name', '').lower():
                results.append(theory)
                continue
            
            # Search in key concepts
            key_concepts = theory.get('key_concepts', [])
            if any(keyword_lower in concept.lower() for concept in key_concepts):
                results.append(theory)
                continue
            
            # Search in educational applications
            applications = theory.get('educational_applications', [])
            if any(keyword_lower in app.lower() for app in applications):
                results.append(theory)
        
        return results
    
    def get_theories_by_category(self, category: str) -> List[Dict[str, Any]]:
        """Get all theories in a specific category."""
        return [theory for theory in self.theories 
                if theory.get('category') == category]
    
    def get_category_statistics(self) -> Dict[str, int]:
        """Get statistics of theories by category."""
        categories = [theory.get('category', 'unknown') 
                     for theory in self.theories]
        return dict(Counter(categories))
    
    def get_theorist_statistics(self) -> Dict[str, int]:
        """Get statistics of theories by theorist."""
        theorist_count = defaultdict(int)
        
        for theory in self.theories:
            theorist = theory.get('theorist', 'Unknown')
            if isinstance(theorist, list):
                for t in theorist:
                    theorist_count[t] += 1
            else:
                theorist_count[theorist] += 1
        
        return dict(theorist_count)
    
    def get_related_theories(self, theory_id: int) -> List[Dict[str, Any]]:
        """Get theories related to a specific theory."""
        theory = self.find_theory_by_id(theory_id)
        if not theory or 'related_theories' not in theory:
            return []
        
        related_ids = theory['related_theories']
        return [self.find_theory_by_id(rel_id) for rel_id in related_ids 
                if self.find_theory_by_id(rel_id)]
    
    def generate_theory_network(self) -> Dict[int, List[int]]:
        """Generate a network of theory relationships."""
        network = {}
        for theory in self.theories:
            theory_id = theory['id']
            related_ids = theory.get('related_theories', [])
            network[theory_id] = related_ids
        return network
    
    def analyze_practical_insights(self) -> Dict[str, List[str]]:
        """Analyze common patterns in veteran teacher insights."""
        all_tips = []
        all_patterns = []
        all_challenges = []
        
        for theory in self.theories:
            insights = theory.get('veteran_teacher_insights', {})
            
            tips = insights.get('practical_tips', [])
            all_tips.extend(tips)
            
            patterns = insights.get('success_patterns', [])
            all_patterns.extend(patterns)
            
            challenges = insights.get('common_challenges', [])
            all_challenges.extend(challenges)
        
        return {
            'practical_tips': all_tips,
            'success_patterns': all_patterns,
            'common_challenges': all_challenges
        }
    
    def export_to_csv(self, output_file: str):
        """Export theories to CSV format."""
        data = []
        for theory in self.theories:
            row = {
                'id': theory['id'],
                'theory_name': theory.get('theory_name', ''),
                'theorist': ', '.join(theory['theorist']) if isinstance(theory.get('theorist'), list) else theory.get('theorist', ''),
                'category': theory.get('category', ''),
                'key_principles': '; '.join(theory.get('key_principles', [])),
                'core_concepts': '; '.join(theory.get('core_concepts', [])),
                'key_concepts': '; '.join(theory.get('key_concepts', [])),
                'educational_applications': '; '.join(theory.get('educational_applications', []))
            }
            data.append(row)
        
        df = pd.DataFrame(data)
        df.to_csv(output_file, index=False, encoding='utf-8')


def example_usage():
    """Demonstrate example usage of ETLAnalyzer."""
    
    # Initialize analyzer (adjust path as needed)
    analyzer = ETLAnalyzer('ETL_EN_Complete.json')
    
    print("=== Educational Theory Library Analysis ===\n")
    
    # 1. Basic statistics
    print("1. Category Statistics:")
    categories = analyzer.get_category_statistics()
    for category, count in sorted(categories.items()):
        print(f"   {category}: {count} theories")
    print()
    
    # 2. Search for constructivism-related theories
    print("2. Theories related to 'constructivism':")
    constructivism_theories = analyzer.search_theories_by_keyword('constructivism')
    for theory in constructivism_theories[:3]:  # Show first 3
        print(f"   - {theory['theory_name']} (ID: {theory['id']})")
    print()
    
    # 3. Analyze a specific theory
    print("3. Detailed analysis of Theory ID 1:")
    theory = analyzer.find_theory_by_id(1)
    if theory:
        print(f"   Name: {theory['theory_name']}")
        print(f"   Theorist: {theory.get('theorist', 'Unknown')}")
        print(f"   Key Principles: {', '.join(theory.get('key_principles', []))}")
        
        # Show related theories
        related = analyzer.get_related_theories(1)
        print(f"   Related Theories: {[t['theory_name'] for t in related]}")
    print()
    
    # 4. Top theorists
    print("4. Most prolific theorists:")
    theorists = analyzer.get_theorist_statistics()
    top_theorists = sorted(theorists.items(), key=lambda x: x[1], reverse=True)[:5]
    for theorist, count in top_theorists:
        print(f"   {theorist}: {count} theories")
    print()
    
    # 5. Practical insights analysis
    print("5. Common practical tips (first 3):")
    insights = analyzer.analyze_practical_insights()
    for tip in insights['practical_tips'][:3]:
        print(f"   - {tip}")


def ai_integration_example():
    """Example of integrating with AI systems."""
    
    analyzer = ETLAnalyzer('ETL_EN_Complete.json')
    
    def generate_lesson_plan_prompt(theory_id: int, subject: str, grade_level: str) -> str:
        """Generate an AI prompt for lesson planning based on a theory."""
        theory = analyzer.find_theory_by_id(theory_id)
        if not theory:
            return "Theory not found."
        
        ai_template = theory.get('ai_prompt_template', '')
        if ai_template:
            # Replace placeholders in the template
            prompt = ai_template.replace('[subject]', subject)
            prompt = prompt.replace('[grade_level]', grade_level)
            return f"""
Based on {theory['theory_name']}, here's your lesson planning prompt:

{prompt}

Key Principles to Consider:
{', '.join(theory.get('key_principles', []))}

Practical Tips from Veteran Teachers:
{', '.join(theory.get('veteran_teacher_insights', {}).get('practical_tips', []))}
"""
        else:
            return f"No AI template available for {theory['theory_name']}"
    
    # Example usage
    print("=== AI Integration Example ===\n")
    prompt = generate_lesson_plan_prompt(1, "Mathematics", "Middle School")
    print(prompt)


if __name__ == "__main__":
    # Run examples
    try:
        example_usage()
        print("\n" + "="*50 + "\n")
        ai_integration_example()
    except FileNotFoundError:
        print("ETL.json file not found. Please ensure the file is in the current directory.")
    except Exception as e:
        print(f"An error occurred: {e}")
