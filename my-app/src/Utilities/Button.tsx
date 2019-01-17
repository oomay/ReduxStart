import * as React from 'react';
interface IButtonProps {    
   clicked: (ev: React.MouseEvent<HTMLButtonElement>) => void; 
   text:string   
}

export class Button extends React.Component<IButtonProps> {
    constructor(props:IButtonProps)
    {
        super(props)
    }
    public render() { 
        return (
            <button onClick={this.props.clicked}>
               {this.props.text}
            </button>
        );
  }
}