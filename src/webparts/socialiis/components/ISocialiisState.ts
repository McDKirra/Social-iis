
import { ISocialiisProps } from './ISocialiisProps';
import { string } from 'prop-types';
import { CurrentUser } from '@pnp/sp/src/siteusers';

import { ITheTime } from '../../../services/dateServices';

export interface IPivot {
    headerText: string;
    itemKey: string;
    filter?: string;
    data?: string;
}
  
export interface IMyPivots {
    projects: IPivot[];
    history: IPivot[];
}
 
  
export interface ILink {
    description: string;
    url: string;
}
  
export interface IUser {
    title: string;
    initials?: string;  //Single person column
    email?: string;  //Single person column
    id?: any;
    Id?: any;
    ID?: any;
    isSiteAdmin?:boolean;
    LoginName?: string;
}

export interface ISocialiisState {
    // 0 - Context
    currentUser?: IUser;  //Current user information

    // 1 - Analytics options
    
    description: string;
    endTime?: ITheTime;

    // 2 - Source and destination list information
    sourceListURL?: string; //Get from list item  
    sourceListName: string;  // Static Name of list (for URL) - used for links and determined by first returned item


    // 3 - 

    // 4 - 

    // 5 - UI Defaults

    // 6 - User Feedback

    // 7 - Media Choices - Left Side bar

    // 8 - Pivot Choices - Top Bar
    pivots?: IMyPivots;
    pivtTitles?:string[];
    filteredCategory?: string;
    pivotDefSelKey?: string;


    // 9 - Other web part options

    loadStatus?: string;

    userLoadStatus?: string;

    showTips?: string;
    loadError?: string;
  
    listError?: boolean;
    itemsError?: boolean;
  
    searchType?: string;
    searchShow?: boolean;
    searchCount?: number;
    searchWhere?: string;

}