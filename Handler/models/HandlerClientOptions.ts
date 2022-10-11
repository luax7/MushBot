import AudioHandler from "../AudioHandler";

export default class HandlerClientOptions {
  public CommandsDirectory?: string;
  public FeaturesDirectory?: string;

  public MongoConnectionString?: string | undefined;
  public Owner!: string;

  public AudioHandler? : AudioHandler | undefined = undefined;
  public RegisterDefaults?: boolean = true;
  public PREFIX? : string = "!"

}
