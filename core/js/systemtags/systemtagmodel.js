/*
 * Copyright (c) 2015
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function(OC) {
	var NS_OWNCLOUD = 'http://owncloud.org/ns';
	/**
	 * @class OCA.SystemTags.SystemTagsCollection
	 * @classdesc
	 *
	 * System tag
	 *
	 */
	var SystemTagModel = OC.Backbone.Model.extend(
		/** @lends OCA.SystemTags.SystemTagModel.prototype */ {
		sync: OC.Backbone.davSync,

		defaults: {
			userVisible: true,
			userAssignable: true
		},

		davProperties: {
			'id': '{' + NS_OWNCLOUD + '}id',
			'name': '{' + NS_OWNCLOUD + '}display-name',
			'userVisible': '{' + NS_OWNCLOUD + '}user-visible',
			'userAssignable': '{' + NS_OWNCLOUD + '}user-assignable'
		},

		parse: function(data) {
			return {
				id: data.id,
				name: data.name,
				userVisible: data.userVisible === '1',
				userAssignable: data.userAssignable === '1'
			};
		}
	});

	OC.SystemTags = OC.SystemTags || {};
	OC.SystemTags.SystemTagModel = SystemTagModel;
})(OC);

