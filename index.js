let kills = '000'
let survivors = '000'

const resetKills = () => kills = '000'
const resetSurvivors = () => survivors = '000'

const kill = people => {
  kills = people.toString().padStart(3, 0)
}

const survive = people => {
  survivors = people.toString().padStart(3, 0)
}

const getScore = () => {
  return `${ kills }:${ survivors }`
}

const Coronavirus = () => {
  resetSurvivors()
  resetKills()

  return {
    getScore,
    survive,
    kill,
  }
}

module.exports = Coronavirus
