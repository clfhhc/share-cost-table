import React, { FC, ChangeEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import test from '../../sql/test';
import { defaultState } from '../../redux/reducers/index';
import {
  createDBUrl as createDBUrlAction,
  loadDB as loadDbAction,
} from '../../redux/actions/actions';
import { ConnectedProps } from '../../utils/redux/types';
import Link from '../Link';

const mapStateToProps = (state: typeof defaultState) => ({
  dbUrl: state.db.dbUrl,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createDBUrl: (name?: string) => dispatch(createDBUrlAction(name)),
  loadDb: (file: Blob, name?: string) => dispatch(loadDbAction(file, name)),
});

type Props = ConnectedProps<typeof mapStateToProps, typeof mapDispatchToProps>;

const DbComponent: FC<Props> = ({ dbUrl, createDBUrl, loadDb }) => {
  const handleButtonClick = () => {
    test().then(() => createDBUrl());
  };

  const handleFileClick = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      loadDb(e.target.files[0]);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleButtonClick}>
        Create a db
      </button>
      {dbUrl && (
        <a href={dbUrl} download="db.sqlite">
          db_link
        </a>
      )}
      <br />
      <input type="file" id="input-db-file" onChange={handleFileClick} />
      <Link href="/static/manifest/manifest.json" passHref>
        <link rel="manifest" />
      </Link>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DbComponent);
