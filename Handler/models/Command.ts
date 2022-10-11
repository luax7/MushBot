import  * as discord from 'discord.js';
import { Snowflake } from 'discord.js';
import HandlerClient from './HandlerClient';

/**
 * @sumary The class that defines commands
 */
export default class CommandInfoClass {
  /**
   * 
   * @description A description of the command
   * 
   */
  public description?: string = "Commando sem descrição";
  /**
   * 
   * @description The maximum number of arguments that can be passed to the command.
   * 
   */
  public maxArgs?: number = 100;
  /**
   * 
   * @description The minimum number of arguments that can be passed to the command.
   * 
   */
  public minArgs?: number = 0;
  /**
   * 
   * @description The name of the command's category.
   * 
   */
  public category?: string = "Comandos";
  /**
   * 
   * @description Says whether the command is hidden in the help command
   * 
   */
  public hidden?: boolean = false;
  /**
   * @sumary The main part of the command that is executed
   * 
   * @param Message - The message that triggered the command
   * 
   * @param Args - The arguments that will be passed to the command
   * 
   * @param Client - The project client
   * 
   * @returns true if the command was executed successfully, otherwise false
   */
  public Callback!: (Message: discord.Message, Args: string | string[], Client: HandlerClient) => boolean;
  /**
   * 
   * @description The tipes of aruments that will be passed to the command
   * 
   * It can be a string or an array of strings
   * 
   */
  public ArgsType?: 'Striped' | 'Joint' = 'Striped';
  /**
   * 
   * @description The roles that are required for the command to be executed
   * 
   */
  public RequiredRoles?: Snowflake[] | string[] | undefined = [];
  /**
   * 
   * @description The roles that are banned from executing the command
   * 
   */
  public BanedRoles?: Snowflake[] | string[] | undefined = [];
  /**
   * 
   * @description The permissions that are required for the command to be executed
   * 
   */
  public RequiredPermissions?: discord.PermissionResolvable[] | undefined = [];
}
