import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/gallery/Gallery";

const HomePage = () => {
      return ( 
            <>
                  <Header />
                  <Gallery 
                        width="1440px"
                        height="681px"
                        radius="4px"
                        showThumbs
                        images={[
                              // {src:'../../../public/.png'},
                              {src:'../../../public/collection-1.png'},
                              {src:'../../../public/collection-2.png'},
                              {src:'../../../public/collection-3.png'},
                              {src:'../../../public/produc-image-1.jpeg'},
                              {src:'../../../public/produc-image-2.jpeg'},
                              {src:'../../../public/produc-image-3.jpeg'},
                              {src:'../../../public/produc-image-4.jpeg'},
                              {src:'../../../public/produc-image-5.jpeg'},
                        ]}
                  />
                  <Footer />
            </>
       );
}
 
export default HomePage;