const STORAGE_BOOKMARK_MAP_KEY = 'bookmarkMap'
const STORAGE_BOOKMARK_LIST_KEY = 'bookmarkList'
class Bookmark {
  constructor () {
    this.bookmarkMap = window.localStorage.getItem(STORAGE_BOOKMARK_MAP_KEY)
    if (this.bookmarkMap) {
      this.bookmarkMap = JSON.parse(this.bookmarkMap)
    } else {
      this.bookmarkMap = {}
    }

    this.bookmarkList = window.localStorage.getItem(STORAGE_BOOKMARK_LIST_KEY)
    if (this.bookmarkList) {
      this.bookmarkList = JSON.parse(this.bookmarkList)
    } else {
      this.bookmarkList = []
    }
  }
  // key = pagename + id
  remove (key) {
    this.bookmarkMap[key] = undefined
    delete this.bookmarkMap[key]

    for (let i = 0; i < this.bookmarkList.length; i++) {
      if (this.bookmarkList[i].key === key) {
        this.bookmarkList.splice(i, 1)
      }
    }
    window.localStorage.setItem(STORAGE_BOOKMARK_MAP_KEY, JSON.stringify(this.bookmarkMap))
    window.localStorage.setItem(STORAGE_BOOKMARK_LIST_KEY, JSON.stringify(this.bookmarkList))
  }
  getMap () {
    return this.bookmarkMap
  }
  getList () {
    return this.bookmarkList
  }
  isBookmark (key) {
    return this.bookmarkMap[key]
  }
  add (item) {
    this.bookmarkList.push(item)
    this.bookmarkMap[item.key] = true

    window.localStorage.setItem(STORAGE_BOOKMARK_MAP_KEY, JSON.stringify(this.bookmarkMap))
    window.localStorage.setItem(STORAGE_BOOKMARK_LIST_KEY, JSON.stringify(this.bookmarkList))
  }
}
export default new Bookmark()
