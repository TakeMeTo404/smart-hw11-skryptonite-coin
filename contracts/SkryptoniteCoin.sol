pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SkryptoniteCoin is ERC20 {
    address public ownerERC;

    constructor() ERC20("Skryptonite Coin", "SKR") {
        ownerERC = msg.sender;

        _mint(ownerERC, 1000);
    }
}