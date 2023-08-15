import styles from './Border.module.scss'
import {SectionContent} from "../../components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {images} from "./dataImagesBorder";

export const Border = () => {
  return (
    <div style={{}}>
      <SectionContent style={{minHeight: '80vh'}} classNamess={styles.house}>
        <div>
          <h3>Заборы</h3>
          <p className={styles.p}> Кирпичный забор - надежное и долговечное огражденим вашей территории.</p>
          <p className={styles.p}>Не требует почти никого ухода, при этом выглядит внушительно и привлекательно.</p>
          <p className={styles.p}>Сделаем заборы из кирпича по вашему дизайну любой сложности.</p>
        </div>
        <div style={{width: '100%'}}>
          <ImageGallery items={images}
                        showIndex={true}
                        slideOnThumbnailOver={true}
          />
        </div>
      </SectionContent>
    </div>
  )
}