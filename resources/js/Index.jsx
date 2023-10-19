import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import store from './_store/store';
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";
import router from './_router/app-routes';
function AppIndex() {

    return (
        <Provider store={store}>
            <Suspense fallback={<>Loading</>}>
                <RouterProvider router={router} />
            </Suspense>
        </Provider>
    );
}

export default AppIndex;

if (document.getElementById('app')) {
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(
        <React.StrictMode>
            <AppIndex />
        </React.StrictMode>
    )
}
