/*
 * CommunityBannerStore store
 *
 */

import { types as t, getParent } from 'mobx-state-tree'
// import R from 'ramda'

import { markStates, makeDebugger } from '../../utils'
/* eslint-disable no-unused-vars */
const debug = makeDebugger('S:CommunityBannerStore')
/* eslint-enable no-unused-vars */

const CommunityBannerStore = t
  .model('CommunityBannerStore', {
    postsTotalCount: t.optional(t.number, 0),
    filteredPostsCount: t.maybe(t.number),
    tagsTotalCount: t.optional(t.number, 0),
  })
  .views(self => ({
    get root() {
      return getParent(self)
    },
    get route() {
      const { mainPath, subPath } = self.root.route
      return {
        mainPath,
        subPath,
      }
    },
  }))
  .actions(self => ({
    markState(sobj) {
      markStates(sobj, self)
    },
  }))

export default CommunityBannerStore