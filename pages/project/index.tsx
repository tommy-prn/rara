/* eslint-disable @next/next/no-img-element */
import {useCallback, useEffect, useState, useMemo} from "react";
import {useRouter} from "next/router";
import {NextPage} from "next";
import Link from "next/link";
import ImageViewer from "react-simple-image-viewer";

// DummyData
import Data from "../../dummy/project-details.json";

// Styles
import {motion} from "framer-motion";

// Components
import {TextGroup} from "../../components/atom/TextGroup";

const Project: NextPage = () => {
  const index = useRouter()?.query?.id;
  const [data, setData] = useState<any>();
  const [preview, setPreview] = useState<boolean>(false);
  const [selected, setSelected] = useState<number>(0);
  const [renderedData, setRenderedData] = useState<any>();

  const openImageViewer = (index: number) => {
    setSelected(index);
    setPreview(true);
  };

  const closeImageViewer = () => {
    setSelected(0);
    setPreview(false);
  };

  const shuffle = useCallback((array: string[]) => {
    for (let i = array?.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }
  }, []);

  const renderData = useCallback(() => {
    let tempArr = [];
    let photoData = data?.thumbnail;

    if (photoData?.length > 0 && photoData?.length <= 6) {
      for (let i = 0; i < 6; i++) {
        if (photoData[i]) {
          tempArr.push(photoData[i]);
        } else {
          tempArr.push("empty");
        }
      }
    } else if (photoData?.length > 0 && photoData?.length <= 12) {
      for (let i = 0; i < 12; i++) {
        if (photoData[i]) {
          tempArr.push(photoData[i]);
        } else {
          tempArr.push("empty");
        }
      }
    } else if (photoData?.length > 0 && photoData?.length <= 18) {
      for (let i = 0; i < 18; i++) {
        if (photoData[i]) {
          tempArr.push(photoData[i]);
        } else {
          tempArr.push("empty");
        }
      }
    }

    setRenderedData(shuffle(tempArr));
  }, [shuffle, data]);

  const imageRender = useMemo(() => {
    return renderedData?.map((item: any, i: number) => {
      return item !== "empty" ? (
        <div
          key={i}
          className="p-1 w-1/6 h-[220px] cursor-pointer duration-200 hover:scale-110"
          onClick={() => openImageViewer(i)}
        >
          <div
            className="w-full h-full box-border bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url(${item})`}}
          />
        </div>
      ) : (
        <div key={i} className="p-1 w-1/6 h-[220px]">
          <div className="w-full h-full box-border" key={i} />
        </div>
      );
    });
  }, [renderedData]);

  useEffect(() => {
    setData(Data[Number(index) - 1]);
    renderData();
  }, [renderData, index]);

  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      {preview && (
        <div className="w-[100vw] h-[100]vh">
          <ImageViewer
            src={data?.photo}
            currentIndex={selected}
            disableScroll={true}
            closeOnClickOutside={false}
            onClose={closeImageViewer}
          />
        </div>
      )}
      <div className="px-12">
        <div className="flex pb-52">
          <div
            className="w-1/3 h-[80vh] mr-12 bg-cover bg-no-repeat bg-center"
            style={{backgroundImage: `url(${data?.mainPhoto})`}}
          />

          <div className="flex flex-col justify-end">
            <div className="flex">
              <div className="mr-12">
                <p className="font-bold">{data?.information?.name}</p>
                <p>{data?.information?.type}</p>
                <p>{data?.information?.address}</p>
                <p>{data?.information?.year}</p>
              </div>

              {data && data?.PIC.length > 0 && (
                <TextGroup
                  title="Architect In Charge"
                  data={data?.PIC}
                  containerStyle="mr-12"
                />
              )}

              {data && data?.contractor.length > 0 && (
                <TextGroup
                  title="General Contractor"
                  data={data?.contractor}
                  containerStyle="mr-12"
                />
              )}

              {data && data?.interior.length > 0 && (
                <TextGroup title="Interior Contractor" data={data?.interior} />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="flex justify-between w-full flex-wrap">
            {imageRender}
          </div>

          <div className="flex w-full mt-4 mb-8 justify-between ">
            <Link
              href={{
                pathname: "/project",
                query: {
                  id: Number(index) <= 1 ? Data.length : Number(index) - 1,
                },
              }}
              passHref
            >
              <div className="font-semibold cursor-pointer">
                Previous Project
              </div>
            </Link>

            <Link
              href={{
                pathname: "/project",
                query: {
                  id: Number(index) >= Data.length ? 1 : Number(index) + 1,
                },
              }}
              passHref
            >
              <div className="font-semibold cursor-pointer">Next Project</div>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
