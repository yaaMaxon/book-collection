# Book Collection Manager

## Project Overview

The **Book Collection Manager** is a React application designed for users to
manage their personal book collection. This project utilizes **Redux Toolkit**
for state management, allowing users to add, update, remove, and filter books
with ease.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Components](#components)
- [Installation](#installation)
- [Usage](#usage)
- [State Structure](#state-structure)
- [User Flow](#user-flow)

## Features

- **Add Books**: Users can add new books with `title`, `author`, and `genre`.
- **View Book List**: Displays all books in a card or table layout.
- **Edit Book Details**: Allows users to modify book information.
- **Remove Books**: Users can delete books from the collection.
- **Filter Books**: Users can filter books by genre or search by title.

## Requirements

- **State Management**: Implemented using **Redux Toolkit**.
- **Styling**: Basic styling using **Tailwind CSS**.
- **Persistent State**: Local state only for practice; no need for persistent
  storage after page reloads.

## Components

- **AddBookForm**: Form for adding new books with inputs for `title`, `author`,
  and `genre`.
- **BookList**: Displays the collection of books.
- **BookItem**: Represents a single book with options to update or remove.
- **FilterComponent**: Allows filtering the book list by genre or searching by
  title.
