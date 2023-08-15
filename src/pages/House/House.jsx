import styles from './House.module.scss'
import {Slider} from "../../components/Slider/Slider";
import {SectionContent} from "../../components";

export const House = () => {
  return (
    <div style={{}}>
      <SectionContent style={{minHeight: '80vh'}} classNamess={styles.house}>
        <div>
          <h3>Дома и коттеджи</h3>
          <p>Строительная бригада возводит частные дома, коттеджи,
            дачи в Бресте и в Бресткой области.</p>
          <br/>
          <p>У нас есть большой опыт строительства,
            проконсультируем по выбору стройматериалов.</p>
        </div>
        <div style={{}}>
          <Slider />
        </div>
      </SectionContent>
    </div>
  )
}