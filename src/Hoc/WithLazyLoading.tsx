import React, {ComponentType, Suspense} from 'react';
import Preloader from "../Components/Preloader/Preloader";

const WithLazyLoading = (Component: ComponentType) => {
    return <Suspense fallback={<Preloader/>}>
        <Component/>
    </Suspense>
};

export default WithLazyLoading;
