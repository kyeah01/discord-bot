const fs = require("fs")

const path = {
  "user"  : "data/users.json",
  "match" : "data/matches.json",
  "summoner_match" : "data/summoner_matches.json"
}

function user () {
  this.data = JSON.parse(fs.readFileSync(path.user, 'utf-8'))
  this.summoner_matches = JSON.parse(fs.readFileSync(path.summoner_match, 'utf-8'))
}

user.prototype.get_object_by_summoner_name = function (summoner_name) {
  return this.data[summoner_name]
}

user.prototype.get_count = function () {
  return Object.keys(this.data).length
}

user.prototype.get_list = function () {
  return this.data
}

user.prototype.create = function (originName, name, info) {
  const summoner = this.get_object_by_summoner_name(name)

  if (summoner != undefined) {
    if (info == this.data[name]) {
      info['originalName'] = originalName
      this.data[name] = info
      this.summoner_matches[info[puuid]] = []
      fs.writeFileSync(path.summoner_match, JSON.stringify(this.summoner_matches), console.log)
      fs.writeFileSync(path.user, JSON.stringify(this.data), console.log)
    }
  }
}

user.prototype.update_matches = function (puuid, match_id) {
  if (this.summoner_matches[puuid] === undefined) {
    this.summoner_matches[puuid] = []
  }
  if (match_id != undefined) {
    this.summoner_matches[puuid] += [match_id]
    fs.writeFileSync(path.summoner_match, JSON.stringify(this.summoner_matches), console.log)
  }
}

const user_db = new user()

module.exports = {
  user : user_db
}