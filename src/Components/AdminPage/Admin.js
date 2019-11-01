import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getStore, updateStore } from '../../Actions';
import fileDownload from 'js-file-download';
import { json2csv, csv2json } from 'json-2-csv';
import Dropzone from 'react-dropzone';

class Admin extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Admin: Constructor");
    }

    componentWillMount()
    {
        this.props.getStore();
    }

    converToCSV = () =>
    {
        json2csv(this.props.storeContent, (err, csv) => {
            fileDownload(csv, 'csvDownload.csv');
        })
    }

    downloadCSV = (csvFile) =>
    {
        const reader = new FileReader();
        reader.readAsText(csvFile[0]);
        reader.onload = () =>
        {
            this.converToJson(reader.result);
        }
    }

    converToJson = (csv) =>
    {
        csv2json(csv, (err, json) => {
            console.log(json[0]);
            this.props.updateStore(json[0]);
        })
    }

    render()
    {
        return (
            <div>
                <div>Admin Component</div>

                <div>
                    <button className="btn btn-primary" onClick={() => this.converToCSV()}>Download</button>
                </div>

                <Dropzone onDrop={(acceptedFiles) => this.downloadCSV(acceptedFiles)} accept={'.csv'}>
                    {
                        ({getRootProps, getInputProps}) => (
                            <section>
                                <div {...getRootProps({className: 'dropzone'})}>
                                    <input {...getInputProps()} />
                                    <p>Drag & drop or click to select file</p>
                                </div>
                            </section>
                        )
                    }
                </Dropzone>
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    return {
        storeContent: state.adminReducer
    }
};

const mapDispatchToProps = (dispatch) => 
{
    return bindActionCreators({getStore, updateStore}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);