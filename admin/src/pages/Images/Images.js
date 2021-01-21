import React, { useEffect } from "react";
import ULayout from "../../containers/Layout";
import { getImages } from "../../store/actions/imagesAction";
import { Row, Col, Image } from "antd";
import { useDispatch, useSelector } from "react-redux";

const Categories = ({ match }) => {
  const dispatch = useDispatch();
  const images = useSelector(({ images }) => images.images);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  return (
    <ULayout activeRoute={match.path} activePage="Images">
      <Row gutter={25}>
        {images.length
          ? images.map((image) => {
              return (
                <Col key={image}>
                  <Image
                    width={100}
                    height={100}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    src={process.env.REACT_APP_SERVER + image}
                  />
                </Col>
              );
            })
          : null}
      </Row>
    </ULayout>
  );
};

export default Categories;
