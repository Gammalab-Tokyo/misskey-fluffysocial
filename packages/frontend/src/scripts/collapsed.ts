/*
 * SPDX-FileCopyrightText: syuilo and misskey-project
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import * as Misskey from 'misskey-js';

export function shouldCollapsed(note: Misskey.entities.Note, urls: string[]): boolean {
	const collapsed = note.cw == null && note.text != null && (
		(note.text.split('\n').length > 12) ||
		(note.text.length > 500) ||
		(note.files.length >= 8) ||
		(urls.length >= 4)
	);

	return collapsed;
}
