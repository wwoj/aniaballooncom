import { Fragment, useState, useEffect } from "react";
import ImageModal from "../Components/UI/ImageModal";


function Gallery_Backdrops() {

  const [showImageModal, setShowImageModal] = useState(false);
  const [idOfImageToShowInModal, setIdOfImageToShowInModal] = useState("")


  const pictureArray = [
    "https://images.pexels.com/photos/5321423/pexels-photo-5321423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6113627/pexels-photo-6113627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/6708951/pexels-photo-6708951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/7336928/pexels-photo-7336928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4065881/pexels-photo-4065881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/704748/pexels-photo-704748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2388650/pexels-photo-2388650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1620784/pexels-photo-1620784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1445903/pexels-photo-1445903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1904733/pexels-photo-1904733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://lh3.googleusercontent.com/pw/AMWts8ATJKa_yvV_xGoeyxBusgbQRs-R8Y_3sDJhNAP9CcrSiJu4vW3L1rkSiSdkmdEjmOvIm3eoFZoj_maHM-mhrRF_IaKrhVwtaqfkFu9_SGrzHIGMqRATTZKNV7dnKVXsDdabHWPazKr5s7pKJH3lejmB=w863-h1297-no?authuser=0",
    "https://am3pap004files.storage.live.com/y4miX_rHpWvF0AQaX_8-4sN1wKkls-BziRqbSwNvcNq3uHm7ddElWdCYugT4IqHb-oPrUxftf-kNzb5mipQgBLe69R-65whU8f6cYRiUB45OzCaEAUHb6vFLEEpyVLIIfmSDQ3gOJMAdMGWW4HIUubvL8V3fuQML8ar2vTd4KDS2RafcEsHwEnymLiidBOzry9e?encodeFailures=1&width=936&height=1249",
    "https://am3pap004files.storage.live.com/y4mMdRt8jggiVOCK898lznTnZvPXRWDEjxwBda0WNHQ6dUz7oPb92-NgP_ijeRqmqhrgyoPIxHWkW1x1JDrIE19Oa477ssU7CBZ4ZSHI47r-isjAIv7TbbPGkLa8xwFny0ccxQub8Kexm1AFd7qitEyPyTLZUVruNsBPt_PeJyq5U4Fr92cliBuYSm_MhZea6XH?encodeFailures=1&width=416&height=312",
    "https://am3pap004files.storage.live.com/y4mYWaJ3doeSLVPUeR5RiYkayrMK9ZDTeexXCBdP59dpdFqxjMJ4semK0CJnupTxSTFV1uSB7MgF2VFhFsjK3S270XIibEkFnLogSE9I69t4M3XQUXgUxMSS330GJdPtfOs-VGarlwxy5camr9cGH4fzJ9XPmiuxnc6AWVjvXqNsrh5KWVXVjMVAtnPCuBj-3pe?encodeFailures=1&width=1665&height=1249",
    "https://am3pap004files.storage.live.com/y4mbjs5dDLCy5i-EiZIBYoly5Hv5nppBXjY6veuVVQ1iyqNZ8pEb4llUaWVUjsliurQ0i683qxlqC5EPfzlYaXGiMn8Vs4b4j5FhzYHXnVH5U3NcuemoGJ2ClTaeexGHUqSvamatzJoRSVF-SVQE4XuvY7WpXqPp3JemLElGnuKsoHHfj4J_tgz1dE4_9LNFGNn?encodeFailures=1&width=1665&height=1249",
    "https://am3pap004files.storage.live.com/y4mMnGwpx4ajyTN-GGVxj1C8CjbHV0Ad4qJEIhwn4nG30XIX0GCqj5Foa2zva3mKy4JOG8YtihiS4sHNVJSOFcEspHGLmbSvKJfnXA3_SRpusM0oQaZravEgmtIOV9XG5GVOmdindIprqsDTbFWpjCDStYgpXQGLCBkywLPibyPkGw44NQbgMWxBa0YEZEdzZ1K?encodeFailures=1&width=936&height=1249",
    "https://am3pap004files.storage.live.com/y4mjWpLAt35ybtk6BrhkUB66iDI5o10Ql9IQrRCsOss72kAWskPMDpDhQYKqZNcbi6kOrfmAf4QLkAZLCCQl2lF_aRUlOe_p2M24iPyijrQkuhhGo9iTvbXa-RoiRnX-7Sx5kghXPDTvOVomAJo_GJE1EsPNjZsqGROpg81xw1UNEzGL8lmOP90GJa0GZnVw--D?encodeFailures=1&width=936&height=1249",
    "https://am3pap004files.storage.live.com/y4mX0y6-22Sqn7HCbGUzyIfDctw4enXkS0Pwh6ypccjS5FTSjfqTtvSShy-nv5d2YsBx6R-KPtbh45YEnky2zKzHsvD_bM5iFtwMoPnOD6U_EUcfDHOlaedtSlv2zzFgIGJDXUrjgTwlzH2Wmz4GEI_DMM4MQY7JM20uZlbS0C9LVvaq606cXELQuB_CWqkgZb8?encodeFailures=1&width=958&height=640",
    "https://am3pap004files.storage.live.com/y4m14G0vgPTtayG4YKw_nkoP2qUQ2gOXB9kueDfa_fo057UzvJ-GmZaDC1-zPZlwDJkwO7ROVqlYh2kz_UfdD4t9BKB1ErB7wAkfL-9eDp0z1CWxQ6yYiJdw3z1AG73akmgYgwgKfnEO_8QQG69OE8EzHZ-tM6NxoQTUJgORYHSpCk8Ba8SLCPH0szKIuI0Bj-k?encodeFailures=1&width=586&height=694",
    "https://am3pap004files.storage.live.com/y4m8AK8x_gNHVuzA3KGHT2bBAScHjni27V55yyQgisGdsusg5RxdSdG6rdFaqFMgOx-DwUMsO67RukjOMsC-94GUsdMm1zTqLU39kq9_PmbXWFUN4nZ0yYhTIM3DMwOIUJEUR-KtIoNS7tehldgGCuWWFZFQbD7JZpyW68I3CjNE_Siit52dhPH_XvQIyIx6Yoi?encodeFailures=1&width=1873&height=1249",
    "https://am3pap004files.storage.live.com/y4mJTesh397wgyAL1agPIaAqEJiID7L9xe1GmMW4MYHWp2uHWuSBkSOmu-uxs7aIFI1R8-BEA9QKrph0XPFLWqtX-fQIktnP_17yb84Zh1KATxyPFffVDVUhWvOmVRs6cll2_3Qtr-fXUeZh8gN9qhS_nyL8e4M5dNaiAhsiOlMtagTLnnfWhOJjS0Eln96fV_4?encodeFailures=1&width=2443&height=1249",
    "https://am3pap004files.storage.live.com/y4mX-IM0Zg1KAZxbgGrb_xDMJkIpU3KxfQjGlZkCmek8ZyUado0h-ULCfaPDT6Hi0Ax4EdjpT2RCTPNXDgZnxNb9zN6ZONdulv4bJVN08k5RBu1yKBt1PqSI5mtAZ7qetfIShv23mbe-OmHPvhLp7sO_7gySgqu9R4UizcE3I19ZhQMr1DLBMTuzgMfKlJ4-7P3?encodeFailures=1&width=1665&height=1249",
    "https://am3pap004files.storage.live.com/y4mEbXyPP0_o_UqARFabZ-wyMzuH-fqr0buR5P3yiqWOkKvi2fcc8KLWT10xc02tMY9sTWRLPwoDXHqmDB7hRxivkWXgQABioNwhriQmCPzrPqKP4-tRqjP6wCPyVGkhqXRDa06AlW2c5zPnUCil1DTQ3Y2meFwxfFuFT83t7Nx-FH9Nh2fKEL1r0nKHY0cam5A?encodeFailures=1&width=1665&height=1249",
    "https://am3pap004files.storage.live.com/y4miXcTre4nXtDa9Vg5WqtQBq3dL28Pjs7biC9hI47yLWt1cUDMVAj-hNOeIdctcjNPLum4dSJ-R-I2uSgjgU122Q7sAQFAhLIupghGQlD2JTqyf-nu0HCfWmsS5zbwWVBIlUcqeYSUwrgo9IdePj1-nf6tLNsUpIbOrW3RL6-1yq2LL4oOJmpI3EpwJck1o_Cc?encodeFailures=1&width=936&height=1249",
    "https://am3pap004files.storage.live.com/y4mTbIBiRa8SdJQ4yGgYhSZLcvK9JcHfUbbRUZdw02rq2YwwO3_Q5J0uNKoRsFmUdESyWg9cI7uZ1ZEtYfNWF9JNxCy0f8t9Rlx0Rr61BdrfwobLmPPrmzHWLWFxigxNtQq5K3eyZZ0R9e9o4AENe1GeHCa-gtb_GQD9vGy-bArQ2HINX9IQKokBB54RtE4iUQY?encodeFailures=1&width=937&height=1249"

  ];

  const showImageHandler = (id) => {
    setIdOfImageToShowInModal(id)
    console.log(idOfImageToShowInModal,"id in gallery")
    document.body.style.overflow = "hidden";
    setShowImageModal(true);
  }

  const hideImage = () => {
    setShowImageModal(false);
    document.body.style.overflow = "";
  }

  return (
    <Fragment>
      {showImageModal && <ImageModal imagesArrey={pictureArray} entryId={idOfImageToShowInModal} onHide={hideImage} />}
      <div className="page-view-container">
        <div className="gallery">
          {pictureArray.map((x, y) => (
            <div className="pics" onClick={() => showImageHandler(y)} key={y}>
              <img
                src={x}
                alt={`pic_${y}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}
export default Gallery_Backdrops;