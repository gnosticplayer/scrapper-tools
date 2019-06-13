import sftpClient from 'ssh2-sftp-client'
import consoleMessage from './consoleMessage'
import fs from 'fs'
import path from 'path'
import { async } from 'rxjs/internal/scheduler/async'

/// # Allows you to upload Via SSH
/// @Todo Lock

export default (() => {
  let sshHandler
  return {
    upload: async ({
      host,
      port,
      username,
      privatekeyPath,
      filePath,
      remoteFilePath,
    }: {
      host: string
      port: string
      privatekeyPath: string
      filePath: string
      username: string
      remoteFilePath: string
    }) => {
      try {
        let sftp = new sftpClient()
        await sftp.connect({
          host,
          port,
          username,
          privateKey: fs.readFileSync(privatekeyPath),
        })
        let sshHandler = sftp
        try {
          await sftp.mkdir(path.dirname(remoteFilePath), true)
        } catch (e) {}
        await sftp.put(filePath, remoteFilePath)
        await sftp.end()
      } catch (e) {
        consoleMessage.error('SSH Uploader Module', e)
      }
    },
    returnHandler: async () => {
      if (!sshHandler) {
        throw 'No SSH Handler found'
      }
      return sshHandler
    },
  }
})()
