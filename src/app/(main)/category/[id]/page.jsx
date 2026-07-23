import LeftSideBar from "@/components/HomePage/news/LeftSideBar";
import NewsCard from "@/components/HomePage/news/NewsCard";
import RightSideBar from "@/components/HomePage/news/RightSideBar";
import { getCategories, getNewaCategoryId } from "@/lib/data";


const CategoryPage = async ({ params }) => {
  const { id } = await params;
  const news = await getNewaCategoryId(id)
  const categories = await getCategories()
  return (
    <div className="w-11/12 mx-auto my-16 grid grid-cols-4">
      <div>
        <LeftSideBar categories={categories} activeId={id} />
      </div>
      <div className=" bg-gray-200 col-span-2">
        <div className="space-y-4 ">

          {
            news.map((n) => <NewsCard n={n} key={n._id}></NewsCard>)
          }
        </div>
      </div>
      <div className=""><RightSideBar /></div>
    </div>
  );
};

export default CategoryPage;