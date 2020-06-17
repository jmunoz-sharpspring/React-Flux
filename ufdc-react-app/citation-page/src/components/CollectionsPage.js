import React from "react";
import { getCollections } from "../api/collectionApi";

class CollectionsPage extends React.Component {
  state = {
    collections: [],
  };

  componentDidMount() { //ths is the proper lifecycle method for making API calls
    getCollections().then((collections) =>
      this.setState({ collections: collections })
    );
  }

  render() {
    return (
      <>
        <h2>Collections</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Creator ID</th>
              <th>Publication Date</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {this.state.collections.map((collection) => {
              return (
                <tr key={collection.id}>
                  <td>{collection.title}</td>
                  <td>{collection.slug}</td>
                  <td>{collection.creatorId}</td>
                  <td>{collection.publicationDate}</td>
                  <td>{collection.language}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CollectionsPage;
