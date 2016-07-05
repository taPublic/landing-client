import React, { Component } from 'react'
import { StyleSheet } from 'quantum'
import NextPage from '../NextPage'
import Step from './steps/Step'

const styles = StyleSheet.create({
  self: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundImage: 'url("/images/steps.jpg")',
    backgroundPosition: '50% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class Steps extends Component {
  render() {
    const { width, height, onNext } = this.props

    return (
      <div style={{ width, height }} className={styles()}>
        <div style={{ marginBottom: 60 }}>
          <Step number='НАША ЦЕЛЬ'>
            Отобрать со всей России самых талантливых и неудержимых футболистов, которые докажут, что достойны играть на профессиональном уровне и получат свою путевку в большой футбол. Помогут нам в этом не только футбольные эксперты и профессионалы, но и каждый неравнодушный поклонник футбола.
          </Step>
          <Step number='ЛЕТО 2016'>
            Пройди первый барьер. Подай свою онлайн заявку. Среди всех заявок с помощью народного интернет-голосования и усилиями экспертной команды селекционеров будут отобраны 300 лучших кандидатов.
          </Step>
          <Step number='ОСЕНЬ 2016'>
            Докажи, что можешь. Продемонстрируй нашим селекционерам весь свой потенциал. Команды скаутов приедут к 300 участникам и отберут 30 самых талантливых из них. За онлайн репортажами скаут-тура будет наблюдать вся страна.
          </Step>
          <Step number='ЗИМА-ВЕСНА 2017'>
            Будь лучшим, будь в основе! 30 футболистов приедут в Москву, чтобы на протяжении полугода жить и тренироваться по распорядку, принятому в клубах высшей лиги. Но нужно постоянно проявлять самоотдачу, ведь каждые две недели кто-то из Народной Сборной может покинуть команду…
          </Step>
          <Step number='ЛЕТО 2017'>
            Твой момент истины.
            <br />
            Народная Сборная сыграет ряд публичных матчей и примет вызов от любой профессиональной команды, чтобы доказать, что талант, самоотдача и желание #игратьлучше - это все , что нужно, чтобы быть в профессиональном футболе. Прояви себя и привлеки внимание лучших клубов!
          </Step>
        </div>
        <NextPage onClick={onNext} />
      </div>
    )
  }
}

export default Steps
