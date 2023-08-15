import styles from './Roof.module.scss'
import {SectionContent} from "../../components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {images} from "./dataImagesRoof";

export const Roof = () => {
  return (
    <div style={{}}>
      <SectionContent style={{minHeight: '80vh'}} classNamess={styles.house}>
        <div>
          <h3>Крыша</h3>
          <p>Мы выполняем кровельные работы разных сложностей и материалов.
            Соблюдая порядок технологии - крыша прослужит долговечно,обеспечивая защиту жилья от попадания влаги, вентиляцию подкровельного помещения, экономию электроэнергии, за счет предотвращения потери тепла.</p>
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