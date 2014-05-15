var low = require('lowdb') 
var _ = require('underscore')
_.mixin(require('underscore.inflections'))


// Turns string to native.
// Example:
//   'true' -> true
//   '1' -> 1
function toNative(value) {
  if (value === 'true' || value === 'false') {
    return value === 'true'
  } else if (!isNaN(+value)) {
    return +value
  } else {
    return value
  }
}

// Creates incremental id.
function createId(coll) {
  if (_.isEmpty(coll)) {
    return 1
  } else {
    return _.max(coll, function(doc) {
      return doc.id
    }).id + 1
  }
}


// Returns document that are have unsatisfied relations
// Example: comment that references a post that doesn't exist
function getRemovable(db) {
  var removable = []

  _(db).each(function(coll, collName) {
    _(coll).each(function(doc) {
      _(doc).each(function(value, key) {
        if (/Id$/.test(key)) {
          var refName = _.pluralize(key.slice(0, - 2))
          var ref     = _.findWhere(db[refName], {id: value})
          if (_.isUndefined(ref)) {
            removable.push([collName, doc.id])
          }
        }
      })
    })
  })

  return removable
}

module.exports = {
  toNative: toNative,
  createId: createId,
  getRemovable: getRemovable
}