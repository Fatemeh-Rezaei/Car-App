import { useRouter } from "next/router";
import carsData from "../../data/carsData";
import CarsList from "../../components/templates/CarsList";

function CategoriesList() {
  const router = useRouter();

  const { categories } = router.query;

  const categoryCars = carsData.filter((car) => car.category === categories);
  console.log(categoryCars);

  return <CarsList data={categoryCars} />;
}

export default CategoriesList;
