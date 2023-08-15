import styles from './House.module.scss'
import {SectionContent} from "../../components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {images} from "./dataImagesHouse";

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
        <div style={{width: '100%'}}>
          <ImageGallery items={images}
                        showIndex={true}
                        showBullets={true}
                        slideOnThumbnailOver={true}
          />
        </div>
      </SectionContent>
    </div>
  )
}