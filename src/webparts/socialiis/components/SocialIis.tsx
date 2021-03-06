import * as React from 'react';
import styles from './Socialiis.module.scss';
import { ISocialiisProps } from './ISocialiisProps';
import { escape } from '@microsoft/sp-lodash-subset';

import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { DefaultButton, autobind, getLanguage, ZIndexes } from 'office-ui-fabric-react';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

import { pivotOptionsGroup, } from '../../../services/propPane';
import {IUser, IMyPivots, IPivot,} from './ISocialiisState';

import { CompoundButton, Stack, IStackTokens, elementContains } from 'office-ui-fabric-react';

/**
 * Typical Youtube embed
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 * 
 * frameborder="0" has to be removed.
 * allowfullscreen has to be removed but you can add "; fullscreen" into the allow= string
 * 
 * working example:
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
 * 
 */

export default class Socialiis extends React.Component<ISocialiisProps, {}> {



  private createPivotData(){
    // Using https://stackoverflow.com/questions/3103962/converting-html-string-into-dom-elements
    let pivots : IMyPivots = {
      projects: 
        [
          { headerText: "Yours",
            filter: "your",
            itemKey: "your",
            data: "Projects where you are the Leader",
          },
          { headerText: "Your Team",
            filter: "team",
            itemKey: "team",
            data: "Projects where you are in the Team",
          },
          { headerText: "Everyone",
            filter: "everyone",
            itemKey: "everyone",
            data: "Projects where Everyone is marked Yes - overrides other categories",
          },
          { headerText: "Others",
            filter: "otherPeople",
            itemKey: "otherPeople",
            data: "Projects where you are not the Leader, nor in the team, and not marked Everyone",
          },
        ]
      ,
      history: 
        [
          { headerText: "Yours",
            filter: "your",
            itemKey: "your",
            data: "History where you are the User",
          },
          { headerText: "Your Team",
            filter: "team",
            itemKey: "team",
            data: "History where you are part of the Team, but not the User",
          },
          { headerText: "Everyone",
            filter: "everyone",
            itemKey: "everyone",
            data: "Currently not in use",
          },
          { headerText: "Others",
            filter: "otherPeople",
            itemKey: "otherPeople",
            data: "History where you are not the Leader, nor in the team, and not marked Everyone",
          },
        ]
      ,
    }

    return pivots;

  }

  public constructor(props:ISocialiisProps){
    super(props);
    this.state = { 
      pivots: this.createPivotData(),

    };

    // because our event handler needs access to the component, bind 
    //  the component to the function so it can get access to the
    //  components properties (this.props)... otherwise "this" is undefined

    /*
    this.onLinkClick = this.onLinkClick.bind(this);
    */
    
  }

  public componentDidMount() {
    //this._getListItems();
    
  }
  
  public componentDidUpdate(prevProps){
/*
    let rebuildTiles = false;
    if (this.props.defaultProjectPicker !== prevProps.defaultProjectPicker) {  rebuildTiles = true ; }

    if (rebuildTiles === true) {
      this._updateStateOnPropsChange({});
    }
*/
  }





  public render(): React.ReactElement<ISocialiisProps> {
    return (
      <div className={ styles.socialiis }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ddPWBxh6EX4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>

              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
