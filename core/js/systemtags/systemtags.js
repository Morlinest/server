/*
 * Copyright (c) 2016
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {
	/**
	 * @namespace
	 */
	OC.SystemTags = {
		/**
		 *
		 * @param {OC.SystemTags.SystemTagModel|Object|String} tag
		 * @return {jQuery}
		 */
		getDescriptiveTag: function(tag) {
			if (_.isUndefined(tag.name) && !_.isUndefined(tag.toJSON)) {
				tag = tag.toJSON();
			}

			if (_.isUndefined(tag.name)) {
				return $('<span>').addClass('non-existing-tag').text(
					t('core', 'Non-existing tag #{tag}', {
						tag: tag
					})
				);
			}

			var $span = $('<span>'),
				$tag = $('<em>').text(
					t('core', '({uservisible}, {userassignable})', {
						uservisible: tag.userVisible ? t('core', 'visible') : t('core', 'invisible'),
						userassignable: tag.userAssignable ? t('core', 'assignable') : t('core', 'not assignable')
					})
				);
			$span.append(escapeHTML(tag.name) + ' ');
			$span.append($tag);
			return $span;
		}
	};
})(OC);

