import React from 'react'
export class Octocat extends React.Component {
  render() {
    return (
      <article>
        <a href={this.props.imgLink}>
          <img src={this.props.imgSRC} alt={this.props.catName} />
        </a>
        <ul>
          <li>
            {this.props.number}:
            <a href={this.props.imgSRC}>
              <strong>{this.props.catName}</strong>
            </a>
          </li>
          <li>
            <a href={this.props.authorLink}>
              <img src={this.props.authorSRC} alt={this.props.authorName} />
            </a>
          </li>
        </ul>
      </article>
    )
  }
}
