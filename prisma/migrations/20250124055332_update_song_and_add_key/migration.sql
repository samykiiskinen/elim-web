/*
  Warnings:

  - Added the required column `keyId` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Song` table without a default value. This is not possible if the table is not empty.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Song] ADD [createdAt] DATETIME2 NOT NULL CONSTRAINT [Song_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
[keyId] INT NOT NULL,
[text] TEXT NOT NULL,
[updatedAt] DATETIME2 NOT NULL CONSTRAINT [Song_updatedAt_df] DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE [dbo].[Key] (
    [id] INT NOT NULL IDENTITY(1,1),
    [key] VARCHAR NOT NULL,
    CONSTRAINT [Key_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Song] ADD CONSTRAINT [Song_keyId_fkey] FOREIGN KEY ([keyId]) REFERENCES [dbo].[Key]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
