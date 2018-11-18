/**
 * @class @name BulkMailCli_booleanCommands
 * @type class util
 * @description Tells whether or not a bulkmail command is ran.
 * 
 * Date of creation: Wed, 7th Nov 2018. 12:39:28 IST
 */


import BulkMailCli_minimist from '../minimist.util'
import { terminal } from 'terminal-kit'

var isArrayInThere = require('array-includes')


class BulkMailCli_booleanCommands {

    constructor(){}

    
    /**
     * @method @name isHelp (@static)
     *
     * @param none
     * @returns boolean
     * 
     * @description Has user ran `bulkmail` command? Yes, or no?
     */
    static isHelp(){
        if(BulkMailCli_minimist.isArgsEmpty()){
            return true
        } return false
    }


    /**
     * @method @name isVersion (@static)
     *
     * @param none
     * @returns boolean
     * 
     * @description Has user ran `bulkmail -v` command? Yes, or no?
     */
    static isVersion(){
        if(!BulkMailCli_minimist.isArgsEmpty() && (BulkMailCli_minimist.getArgs()["v"] || BulkMailCli_minimist.getArgs()["version"])){
            return true
        } return false
    }


    /**
     * @method @name isConfig (@static)
     *
     * @param none
     * @returns boolean
     * 
     * @description Has user ran `bulkmail config` command? Yes, or no?
     */
    static isConfig(){
        if(!BulkMailCli_minimist.isArgsEmpty() && isArrayInThere(BulkMailCli_minimist.getArgs()["_"], "config")){
            return true
        } return false
    }


    /**
     * @method @name isDemo (@static)
     *
     * @param none
     * @returns boolean
     * 
     * @description Has user ran `bulkmail demo` command? Yes, or no?
     */
    static isDemo(){
        if(!BulkMailCli_minimist.isArgsEmpty() && isArrayInThere(BulkMailCli_minimist.getArgs()["_"], "demo")){
            return true
        } return false
    }


    /**
     * @method @name hasPressedCtrlC (@static)
     *
     * @param none
     * @returns boolean
     * 
     * @description Has user pressed `Ctrl_C` command? Yes, or no?
     */
    static hasPressedCtrlC(){
        terminal.on( 'key' , function( key , matches , data ) { 
            switch ( key ){
                case 'CTRL_C': 
                    process.stdout.write("\u001b[2J\u001b[0;0H");
                    process.exit()
                    return true
                default: return false
            }
        })
    }

}

export default BulkMailCli_booleanCommands