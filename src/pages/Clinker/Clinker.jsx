import styles from './Clinker.module.scss'
import {SectionContent} from "../../components";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {images} from "./dataImagesClinker";
import {BsCheckSquare} from "react-icons/bs";

export const Clinker = () => {
  return (
    <div style={{}}>
      <SectionContent style={{minHeight: '80vh'}} classNamess={styles.house}>
        <div>
          <h3>Облицовка кирпичом</h3>
          <p>
            Кирпичная постройка не требует никаких дополнительных расходов на ремонт.Она придаст вашему жилью не только обновленный и красивый внешний вид, но и наделит строение дополнительными качественными характеристиками:<br />
          </p>
          <p><BsCheckSquare/>повысится звуко- и шумоизоляция;</p>
          <p><BsCheckSquare/>улучшится микроклимат в помещении;</p>
          <p><BsCheckSquare/>не надо больше тратиться на ремонт фасада;</p>
          <p><BsCheckSquare/>стены станут крепче, и увеличится срок службы дома;</p>
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