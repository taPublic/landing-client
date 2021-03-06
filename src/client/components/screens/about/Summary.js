import React from 'react'
import { StyleSheet } from 'quantum'

const styles = StyleSheet.create({
  self: {
    fontFamily: 'Turum2',
    fontSize: '32px',
    color: '#ffffff',
    maxWidth: '416px',
    lineHeight: '30px',
  },
})

const Summary = () => (
  <div className={styles()}>
    Мы часто слышим, что в России нет футбола, что это не наша игра, что у нас играют только за деньги. Мы обсуждаем, как отдыхает наша сборная, оцениваем их, высказываем мнения о том, кто достоин, а кто нет, кого нужно распустить, а кого поменять… мы рассуждаем, дискутируем, делимся мыслями, говорим, говорим, говорим…. хватит говорить… лучше играть! #игратьлучше!
    <br />
    <br />
    Народная Сборная - это проект для тех, кто готов доказать делом, поступками, игрой, что в России есть футбол!  Доказать, что все, что нужно для победы - это страсть и самоотдача. Несмотря на условия, критику, отказы, препятствия, нужно просто играть лучше.  Ведь игра, в которую мы влюблены с детства, просто обязана быть нашей!
  </div>
)

export default Summary
