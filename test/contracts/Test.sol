pragma solidity 0.4.24;


contract Test {
    uint32 public data;

    event SetValue(uint32 oldData, uint32 newData);

    function setDat(uint32 _data) public {
        emit SetValue(data, _data);
        data = _data;
    }
}