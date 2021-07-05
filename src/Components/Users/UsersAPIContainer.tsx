import React, {useEffect} from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    followTC,
    getUsersPageTC,
    ItemsType,
    setCurrentPage,
    setDisabledButton,
    setLoading,
    setTotalCount,
    setUsers,
    unFollow,
    unFollowTC
} from "../../Redux/usersReducer";
import {AppStateType} from "../../Redux/reduxStore";
import Preloader from "../Preloader/Preloader";
import {getCurrentPage, getError, getIsDisabled, getIsLoading, getItems, getPageSize, getTotalCount} from "./selectors/selectors";

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: ItemsType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    setLoading: (isLoading: boolean) => void
    setDisabledButton: (isDisabled: boolean) => void
    getUsersTC: (currentPage: number, pageSize: number) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

type mapStateToPropsType = {
    items: ItemsType[]
    currentPage: number
    totalCount: number
    pageSize: number
    error: string[] | null
    isLoading: boolean
    isDisabled: boolean
}

type UsersAPIContainerPropsType = mapDispatchToPropsType & mapStateToPropsType

const UsersAPIContainer = ({
                               currentPage, getUsersTC, pageSize, totalCount,
                               items, follow, unFollow, setCurrentPage, isLoading,
                               isDisabled, setDisabledButton, followTC, unFollowTC
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        getUsersTC(currentPage, pageSize)
    }, [currentPage, pageSize])

    return isLoading
        ? <Preloader/>
        : <Users items={items} currentPage={currentPage}
                 totalCount={totalCount}
                 unFollowTC={unFollowTC}
                 followTC={followTC}
                 follow={follow} unFollow={unFollow}
                 isDisabled={isDisabled}
                 setDisabledButton={setDisabledButton}
                 setCurrentPage={setCurrentPage}/>
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        items: getItems(state),
        currentPage: getCurrentPage(state),
        totalCount: getTotalCount(state),
        error: getError(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        isDisabled: getIsDisabled(state),
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setLoading,
    setDisabledButton,
    getUsersTC: getUsersPageTC,
    followTC,
    unFollowTC
})(UsersAPIContainer)
