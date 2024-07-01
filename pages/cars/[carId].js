import { useRouter } from "next/router";

import carsData from "../../data/carsData";

function CarDetail() {
  const router = useRouter();
  const { carId } = router.query;
  const carDetail = carsData[carId - 1];
  
  return <div>CarDetail</div>;
}

export default CarDetail;
