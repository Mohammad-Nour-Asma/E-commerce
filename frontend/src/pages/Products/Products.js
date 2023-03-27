import React, { useEffect, useRef, useState } from "react";
import Path from "../../components/Path/Path";
import styles from "./Products.module.css";
import ProductBox from "../../components/product/ProductBox";
import axios from "axios";
import { get_products_url, get_brands_url } from "../../assest/Api/Api";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

const Products = () => {
  const inputSearch = useRef();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [brandsError, setBrandsError] = useState(false);
  const [brands, setBrands] = useState([]);
  const [search, setSearch] = useState("");
  const [brandId, setBrandId] = useState("");
  const [ram, setRam] = useState(200);
  const [price, setPrice] = useState(4000);

  const getProducts = async () => {
    try {
      setLoading(true);
      setError(false);

      const response = await axios.post(get_products_url, {
        search: search,
        ram: ram,
        brand: brandId,
        price: price,
      });

      setProducts(response.data.products);
      setLoading(false);
    } catch (ex) {
      console.log(ex);
      setError(true);
      setLoading(false);
    }
  };

  const getBrands = async () => {
    try {
      setBrandsError(false);
      const response = await axios.get(get_brands_url);
      setBrands(response.data.brands);
    } catch (ex) {
      setBrandsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, [search, price, brandId, ram]);

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <main className="">
      <Path path="Products" />
      <div className={` container ${styles.all}`}>
        <aside className={styles.filters}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearch(inputSearch.current.value);
            }}
          >
            <input
              ref={inputSearch}
              type="text"
              placeholder="Search"
              name="search"
            />
            <button className="sub-button" type="submit">
              search
            </button>
            {!brandsError && (
              <div className={styles.brands}>
                <p className={styles.filterTitle}>Brands</p>
                <button
                  className={+brandId > 0 ? "" : `${styles.active}`}
                  onClick={() => {
                    setBrandId("");
                  }}
                >
                  All
                </button>
                {brands.map((item) => {
                  return (
                    <button
                      onClick={() => {
                        setBrandId(item?.id);
                      }}
                      className={brandId === item?.id ? `${styles.active}` : ""}
                      key={item?.id}
                    >
                      {item?.name}
                    </button>
                  );
                })}
              </div>
            )}
            <div className={styles.ram}>
              <p className={styles.filterTitle}>Ram</p>
              <span>{ram}GB</span>
              <input
                onChange={(e) => {
                  setRam(e.target.value);
                }}
                type="range"
                name="ram"
                min={1}
                max={200}
                value={ram}
              />
            </div>
            <div className={styles.price}>
              <p className={styles.filterTitle}>Price</p>
              <span>$ {price}</span>

              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="range"
                name="ram"
                min={10}
                max={4000}
                value={price}
              />
            </div>
          </form>
          <button
            onClick={() => {
              setSearch("");
              setBrandId("");
              setPrice(4000);
              setRam(50);
            }}
            className={styles.clearFilters}
          >
            Clear Filters
          </button>
        </aside>
        <div className={styles.products}>
          <div className={styles.header}>{products?.length} Products Found</div>
          {loading && <Spinner />}
          {error ? (
            <Error />
          ) : products?.length === 0 && !loading ? (
            <div className="sides">
              <p>Sorry, no products matched your search.</p>
            </div>
          ) : (
            <div className={styles.boxes}>
              {products?.map((item) => {
                return <ProductBox item={item} key={item.id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Products;
