import React, { Component } from 'react'
import PreSalesFeedbackForm from './PreSalesFeedbackForm';

export class MainForm extends Component {
 
    render() {
        const step=1;
        
        switch(step){
          case 1:
          return (
          <PreSalesFeedbackForm />
        );
        }

    }
}

export default MainForm
