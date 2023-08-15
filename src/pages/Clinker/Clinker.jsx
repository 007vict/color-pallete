import styles from './Clinker.module.scss'
import {SectionContent} from "../../components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {images} from "./dataImagesClinker";

export const Clinker = () => {
  return (
    <div style={{}}>
      <SectionContent style={{minHeight: '80vh'}} classNamess={styles.house}>
        <div>
          <h4>Облицовка кирпичом</h4>
          <p>
            Кирпичная постройка не требует никаких дополнительных расходов на ремонт.Она придаст вашему жилью не только обновленный и красивый внешний вид, но и наделит строение дополнительными качественными характеристиками:<br />
          </p>
          <br />
          <p><span>&#10003;</span>повысится звуко- и шумоизоляция;</p>
          <p><span>&#10003;</span>улучшится микроклимат в помещении;</p>
          <p><span>&#10003;</span>не надо больше тратиться на ремонт фасада;</p>
          <p><span>&#10003;</span>стены станут крепче, и увеличится срок службы дома;</p>
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