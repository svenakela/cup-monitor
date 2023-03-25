import React, { lazy, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import GameData from './GameData'

const importTeam = team =>
  lazy(() =>
    import(`./teams/${team}View`).catch(() => import(`./teams/NullView`))
  )

export default function GameSchedule() {
  const [activeView, setActiveView] = useState([])
  const [views, setViews] = useState([])
  const [schedule, setSchedule] = useState([])

  const loadTeams = async () => {
    const now = Date.now()

    const getGame = async (game) => {
      const Home = importTeam(game.home)
      const Away = importTeam(game.away)
      return <div className='game-container' key={nanoid()}>
        <GameData isoTime={game.startTime}/>
        <Home key={nanoid()} />
        <Away key={nanoid()} />
      </div>
    }

    const activePromise = schedule
      .filter((game) => {
        let ts = new Date(game.startTime) 
        return ts < now && now < ts.setMinutes(ts.getMinutes() + 50)
      })
      .slice(0, 1)
      .map(getGame)

    Promise.all(activePromise).then(setActiveView)

    const gamePromises = schedule
      .filter((game) => new Date(game.startTime) > now)
      .slice(0, 3)
      .map(getGame)

    Promise.all(gamePromises).then(setViews)
  }

  const fetchSchedule = async () => {
    const response = await fetch(
      "/gameschedule.json"
    );
    const parsed = await response.json();
    setSchedule(parsed);
  }

  useEffect(() => {
    fetchSchedule()
  }, [])

  useEffect(() => {
    loadTeams()
  }, [schedule])

  setInterval(fetchSchedule, 5000);

  return (
    <React.Suspense fallback="Loading views...">
      <div className="activeView">{activeView}</div>
      <div className="views">{views}</div>
    </React.Suspense>
  )
}
