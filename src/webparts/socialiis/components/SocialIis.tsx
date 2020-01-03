import * as React from 'react';
import styles from './Socialiis.module.scss';
import { ISocialiisProps } from './ISocialiisProps';
import { escape } from '@microsoft/sp-lodash-subset';


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
