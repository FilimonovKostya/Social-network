import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followTC, getUsersPageTC, ItemsType, setCurrentPageAC, unFollowTC} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getIsDisabled, getIsLoading, getItems, getPageSize, getTotalCount} from "./selectors/selectors";
import {compose} from "redux";

type mapDispatchToPropsType = {
    setCurrentPageAC: (currentPage: number) => void
    getUsersPageTC: (currentPage: number, pageSize: number) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

type mapStateToPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    pageSize: number
    isLoading: boolean
    isDisabled: boolean
}

type UsersAPIContainerPropsType = mapDispatchToPropsType & mapStateToPropsType

const UsersAPIContainer = ({
                               items, currentPage, totalCount, setCurrentPageAC, isDisabled, followTC, unFollowTC, pageSize, isLoading, getUsersPageTC
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        console.log('tut')

        getUsersPageTC(currentPage, pageSize)
    }, [currentPage, pageSize])




    return isLoading
        ? <Preloader/>
        : <Users items={items} currentPage={currentPage}
                 totalCount={totalCount}
                 unFollowTC={unFollowTC}
                 followTC={followTC}
                 setCurrentPageAC={setCurrentPageAC}
                 isDisabled={isDisabled}
        />
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: getItems(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        isDisabled: getIsDisabled(state),
    }
}

export default compose(
    connect(mapStateToProps, {setCurrentPageAC, getUsersPageTC, followTC, unFollowTC}))
(UsersAPIContainer)
