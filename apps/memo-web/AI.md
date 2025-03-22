# Programming Knowledge Memo Application PRD

## Introduction

- This project is a memo application that allows you to write down your thoughts and ideas.
- Write all IT knowledge and information in one place.
- Use Markdown to write down your thoughts and ideas.
- All knowledge is about programming.

## Project Overview

- **Project Name**: IMKDW Dev | MEMO
- **Target Users**: Developers, programmers, and IT professionals
- **Core Value Proposition**: Centralized repository for programming knowledge with markdown support

## Problem Statement

Many developers struggle with organizing their programming knowledge, snippets, and solutions across different platforms. This application aims to solve this problem by providing a single, searchable repository for all programming-related information.

## User Stories

- As a developer, I want to quickly jot down code snippets so that I can reference them later.
- As a programmer, I want to organize my notes by categories and tags so that I can find information easily.
- As an IT professional, I want to use markdown formatting so that my technical documentation is readable and well-structured.
- As a user, I want to search through my notes so that I can quickly find relevant information.

## Features and Requirements

### Core Features

1. **Markdown Editor**

   - Full markdown support including code blocks with syntax highlighting
   - Live preview of markdown content
   - Support for tables, lists, and other markdown elements

2. **Organization System**

   - Hierarchical folder structure
   - Tagging system for cross-referencing
   - Favorites/bookmarks for frequently accessed notes

3. **Search Functionality**

   - Full-text search across all notes
   - Search within code blocks

4. **User Experience**
   - Responsive design for desktop and mobile
   - Dark/light mode toggle
   - Keyboard shortcuts for power users

## Technical Specifications

### Stack

- Next.js v15
- Tailwind CSS

### Architecture

- Frontend: Next.js with App Router
- API: Next.js API routes
- State management: Zustand

## UI/UX Design Guidelines

- Clean, minimalist interface focusing on content
- Code-editor inspired aesthetics
- High contrast for readability
- Consistent spacing and typography
