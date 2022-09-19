import type { Page } from 'astro';
import type { MarkdownInstance } from 'astro-boilerplate-components';

import type { AuthorFrontmatter } from './AuthorFrontmatter';

type AuthorPage = Page<MarkdownInstance<AuthorFrontmatter>>;

export type { AuthorPage };
