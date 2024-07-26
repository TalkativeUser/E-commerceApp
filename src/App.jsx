import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layour from "./Component/Layour/Layour";
import Products from "./Component/Products/Products";
import Wishlist from "./Component/Wishlist/Wishlist.jsx";
import Login from "./Component/Login/Login";
import Regester from "./Component/Regester/Regester";
import Category from "./Component/Category/Category";
import NotFound from "./Component/NotFound/NotFound";
import Profile from "./Profile/Profile";
import AuteProvider from "./context/authencontext";
import ReactProtected from "./ReactProtected/ReactProtected";
import { QueryClient, QueryClientProvider } from "react-query";
import ProductDetails from "./ProductDetails/ProductDetails";
import { CartContextProvider } from "./context/cartContext";
import { Toaster } from "react-hot-toast";
import Cart from "./Component/Cart/Cart";
import Payment from "./Component/Payment/Payment";
import AllOrders from "./Component/AllOrders/AllOrders";
import { Offline } from "react-detect-offline";
import CategoryDetails from "./Component/Category/CategoryDetails";
import SubCategory from "./Component/SubCategory/SubCategory";
import ForgetPass from "./Component/ForgetPass/ForgetPass";
import VerificationCode from "./Component/VerificationCode/VerificationCode";
import ResetPassword from "./Component/ResetPassword/ResetPassword";
import UpdatePassword from "./Component/UpdatePassword/UpdatePassword";
import UpdateUserData from "./Component/UpdateUserData/UpdateUserData";
import Brands from "./Component/Brands/Brands.jsx";
import RenderAllData from "./Component/RenderAllData/RenderAllData.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layour />,
    children: [
      {
        index: true,
        element: (
          <ReactProtected>
            <Products />
          </ReactProtected>
        ),
      },
      {
        path: "Products",
        element: (
          <ReactProtected>
            <Products />
          </ReactProtected>
        ),
      },
      {
        path: "/SubCategory",
        element: (
          <ReactProtected>
            <SubCategory />
          </ReactProtected>
        ),
      },
      {
        path: "/Brands",
        element: (
          <ReactProtected>
            <Brands />
          </ReactProtected>
        ),
      },
      {
        path: "/renderAllData",
        element: (
          <ReactProtected>
            <RenderAllData />
          </ReactProtected>
        ),
      },
      {
        path: "/ForgetPass",
        element: (
         
            <ForgetPass />
         
        ),
      },
      {
        path: "/ResetPassword",
        element: (
         
            <ResetPassword />
         
        ),
      },
      {
        path: "/VerificationCode",
        element: (
         
            <VerificationCode />
         
        ),
      },
      {
        path: "Wishlist",
        element: ( <ReactProtected>
            <Wishlist />
            </ReactProtected>
        
        ),
      },
      {
        path: "ProductDetails/:id",
        element: (
          <ReactProtected>
            <ProductDetails />
          </ReactProtected>
        ),
      },
      {
        path: "Category/CategoryDetails/:id",
        element: (
          <ReactProtected>
            <CategoryDetails />
          </ReactProtected>
        ),
      },
      { path: "Login", element: <Login /> },
      { path: "Regester", element: <Regester /> },
      {
        path: "Profile",
        element: (
          <ReactProtected>
            <Profile />
            </ReactProtected>
        )
      },
      {
         path:"Profile/updatePassword",element:  <ReactProtected> <UpdatePassword /> </ReactProtected>
      },
      {
         path:"Profile/updateUserData",element:  <ReactProtected> <UpdateUserData /> </ReactProtected>
      },
      {
        path: "Category",
        element: (
          <ReactProtected>
            <Category />
          </ReactProtected>
        ),
      },
      {
        path: "cart",
        element: (
          <ReactProtected>
            <Cart />
          </ReactProtected>
        ),
      },
      {
        path: "payment",
        element: (
          <ReactProtected>
            <Payment />
          </ReactProtected>
        ),
      },
      {
        path: "AllOrders",
        element: (
          <ReactProtected>
            <AllOrders />
          </ReactProtected>
        ),
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  let clientQuery = new QueryClient();

  return (
    <>
      <CartContextProvider>
        <QueryClientProvider client={clientQuery}>
          <AuteProvider>
            <RouterProvider router={route} />
          </AuteProvider>
        </QueryClientProvider>
        <Toaster />

        <Offline>
          <div className="position-fixed bottom-0 start-0 bg-dark text-white ">
            you are offline please check your network
          </div>
        </Offline>
      </CartContextProvider>
    </>
  );
}
